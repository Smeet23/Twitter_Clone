import {Router} from 'express';

const router = Router();

// User Crud 

//Create User
router.post('/',(req,res)=>{
    res.status(501).json({error:'Not implemented'});
})

//List Users
router.get('/',(req,res)=>{
    
    res.status(501).json({error:'Not implemented'});
})

//get one user
router.get('/:id',(req,res)=>{
const {id} = req.params;
res.status(501).json({Error:`Not implemented on id:${id}`})
})

//Update user
router.put('/:id',(req,res)=>{
    const {id} = req.params;
    res.status(501).json({Error:`Not implemented on id:${id}`})
    })

//Delete  user
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    res.status(501).json({Error:`Not implemented on id:${id}`})
    })


export default router;