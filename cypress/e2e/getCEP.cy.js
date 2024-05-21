import { getCEPRequest } from "../support/getCEPRequest";

describe("Obter informações do CEP", () => {
    it("Deve retornar o status 200 e listar informações", () => {
    getCEPRequest('01001000').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.eq({
            cep: "01001-000",
            logradouro: "Praça da Sé",
            complemento: "lado ímpar",
            bairro: "Sé",
            localidade: "São Paulo",
            uf: "SP",
            ibge: "3550308",
            gia: "1004",
            ddd: "11",
            siafi: "7107"
          });
      });
    });

    it("Deve retornar o status 400 ao passar um parametro inválido", () => {
        getCEPRequest('9090').then((response) => {
          expect(response.status).to.equal(400);
        });
      });
});
