import { beforeAll, describe, expect, it } from "vitest";
import { app } from "..";
import request from "supertest";
import resetDb from "./helpers/reset-db";


describe('/POST sum',()=>{
    beforeAll(async () => {
        console.log("clearing db");
        await resetDb();
    });
    it('should calculate sum',async()=>{

        const {status,body}= await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
       
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });

    })
})