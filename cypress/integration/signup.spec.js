import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', function () {
    /* 
        beforeEach(function () {
            cy.fixture('deliver').then((d) => {
                this.deliver = d
            })
        }) */

    it('User should be deliver.', function () {

        let deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorret document.', function () {

        let deliver = signupFactory.deliver()
        deliver.cpf = '000000141AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorret email.', function () {

        let deliver = signupFactory.deliver()
        deliver.email = 'email.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    context('Required fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        beforeEach(function () {
            signup.go()
            signup.submit()
        })
        messages.forEach(function (message) {
            it(`${message.field} is required`, function () {
                signup.alertMessageShouldBe(message.output)
            })
        })
    })

})