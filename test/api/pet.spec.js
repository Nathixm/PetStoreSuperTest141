
const supertest = require('supertest');
const Test = require('supertest/lib/test');

const petId = 297537601;

describe('API petStore Swagguer - Pet', () => {

    const request = supertest('https://petstore.swagger.io/v2'); 

    const pet = require('../../vendors/json/pet.json');

    it('POST Pet', async () => {
        const res = await request
            .post('/pet')
            .send(pet);

        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(petId);
        expect(res.body.name).toBe('Jake');
        expect(res.body.photoUrls[0]).toBe();
        expect(res.body.category.name).toBe('dog');
        expect(res.body.category.id).toBe(1);
        expect(res.body.tags[0].name).toBe('vaccinated');
        expect(res.body.tags[0].id).toBe(1);
        expect(res.body.status).toBe('available');
    });
    
    it('GET Pet', async () => {
        const res = await request
            .get(`/pet/${petId}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(petId);
        expect(res.body.status).toBe('available');
    });    

    it('PUT Pet', async () => {
        const pet = require ('../../vendors/json/petput.json')

        const res = await request
            .put(`/pet`)
            .send(pet);
        expect(res.statusCode).toEqual(200);
        expect(res.body.id).toEqual(petId);
        expect(res.body.status).toEqual('sold');   
    })

    it('DELETE Pet', async () => {
        const res = await request
            .delete(`/pet/${petId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.code).toEqual(200);
        expect(res.body.message).toEqual(`${petId}`);
    })

});