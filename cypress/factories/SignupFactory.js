var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default {

    deliver: function () {

        
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()

        let data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '4899999999',
            address: {
                postalcode: '88106517',
                street: 'Rua José Wilson Francisco',
                number: '1000',
                details: 'Apt 999',
                district: 'Forquilhinha',
                city_state: 'São José/SC'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}

