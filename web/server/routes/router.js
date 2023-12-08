const rootRouter = (app) => {
    app.use('/api/test',(req,res)=> {
        res.send({message: 'Ok'})
    })
}

export default rootRouter;