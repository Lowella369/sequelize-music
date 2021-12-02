const {sequelize} = require('./db')
const {Musician} = require('./index')

describe('Musician Database', () => {
    beforeAll(async() => {
        await sequelize.sync({force:true})
    })

    test('can create a musician', async() => {
        //const testMusician = await Musician.create({name: 'Prince',  instrument: 'guitar'})
        
        const testMusician =  await Musician.create({name: 'Prince', instrument: 'guitar', address: '123 Main St'})
        // const musician = await Musician.findAll();
        // console.log(musician)
        // const testMusician = await Musician.findOne({
        //     where: {
        //         name: 'Prince'
        //     }
        // });
        expect(testMusician.name).toBe('Prince')
        expect(testMusician.instrument).toBe('guitar')
        expect(testMusician.address).toBe('123 Main St')
    })

})