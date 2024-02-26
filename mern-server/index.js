const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors=require('cors')

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send('hello hi hi world')
})


// mongo DB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mern1-book-store:EgavMK2hCwiQB7uR@mern.49qyevt.mongodb.net/?retryWrites=true&w=majority&appName=mern";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// 444444444444444444444444444444444444

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const bookCollection = client.db("BookInventory").collection("books");



    //insert a book to the db :post method

    app.post("/upload-book",async(req,res)=>{
        const data = req.body;
        const result= await booksCollections.insertOne(data);
        res.send(result);
    })

    //Get all
    app.get("/all-books",async(req,res) =>{
      const book = booksCollection.find();
      const result =await booksCollections.toArray();
      res.send(result);
    })

    // Update a book data

    app.patch("/book/:id",async(req,res)=>{
      const id =req.params.id;
      const updateBookData = req.body;
      const filter ={_id:new ObjectId(id)};
      const options ={upsert:true};

      const updateDoc ={
        $set:{
          ...updateBookData
        },
      }

      //update

      const result =await booksCollections.updateOne(filter,updateDoc,options);
      res.send(result);
    })

    // delete a a boo data
    app._router.delete("/book/:id",async(req,res)=>{
      const id = req.params.id;
      const filter={ _id:new ObjectId(id)};
      const result = await booksCollections.deleteOne(filter);
      res.send(result);
    })


    // find by catagory
    app.get("/all-book",async(req,res)=>{
      let query = {};
      if(req.query?.category){
        query={category:req.query.category}
      }
      const result=await booksCollections.find(query).toArray();
      res.send(result);
    })


    // to get single book data

    app.get("/book/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await booksCollections.findOne(filter);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port,() =>{
  console.log(`example app listening on port ${port}`);
})