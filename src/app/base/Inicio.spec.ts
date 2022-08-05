import { primeros, dos } from './Inicio';
describe('Probndo Inicio', ()=>{
    
    it('Probando Primeros', ()=>{
        const resultado = primeros();
        expect(resultado).toEqual('Hola que hace');
    });

    it('Debe retornar una cadena que contenga el argumento', ()=>{
        const resultado = dos('Testing#23');
        expect(resultado).toContain('Testing#23');
    })

});