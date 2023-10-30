import {Router} from 'express';

const router = Router();

// Tweet Crud 

//Create Tweet
router.post('/',(req,res)=>{
    res.status(501).json({error:'Not implemented'});
})

//List Tweets
router.get('/',(req,res)=>{
    
    res.status(501).json({error:'Not implemented'});
})

//get one Tweet
router.get('/:id',(req,res)=>{
const {id} = req.params;
res.status(501).json({Error:`Not implemented on id:${id}`})
})

//Update Tweet
router.put('/:id',(req,res)=>{
    const {id} = req.params;
    res.status(501).json({Error:`Not implemented on id:${id}`})
    })

//Delete  Tweet
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    res.status(501).json({Error:`Not implemented on id:${id}`})
    })


export default router;