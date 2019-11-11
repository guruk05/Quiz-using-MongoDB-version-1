module.exports = (app, col) => {
    app.post("/", (req, res) => {
        console.log('/');
     const store ={username: req.body.username, password: req.body.password};
    //  console.log(req);
        console.log(req.body);
        
            col.collection('Username').insertOne(store, function (err, result) {
                console.log("Document inserted successfully");
            if (err) throw err;
            // col.close();
        });
        res.status(200).send('successful');
    });

    app.get("/", (req, res) => {
        col.collection('Questions').findOne({test_id: 1}, function(err, document) {
           // console.log(document)
            res.send(document);
          });
    });
 };