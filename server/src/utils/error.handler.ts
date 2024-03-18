import { Response } from "express"

const handleHttp=(res:Response, error:string, code:number)=>{
    res.status(code);
    res.send({error});
};

export default handleHttp;
