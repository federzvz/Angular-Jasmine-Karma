import { MetodosCondicionales } from './Metodos-etc';
describe('probando métodos y condiniales',()=>{
    let componente: MetodosCondicionales;
    
    beforeEach(()=>{
        componente = new MetodosCondicionales();
    })

    it('probando metodo "probandoCondicionales"', ()=>{
        expect(componente.probandoCondicionales()).toBe('variable1 es verdadera');
    })

    it('probando variable 1 falsa', ()=>{
        componente.variable1 = false;
        expect(componente.probandoCondicionales()).toBe('variable 2 y 3 son verdaderas');
    })

    it('probando variable 1 y 3 falsa', ()=>{
        componente.variable1 = false;
        componente.variable3 = false;
        expect(componente.probandoCondicionales()).toBe('variable 2 es verdadera');
    })

    it('probando variable 1,2 y 3 falsa', ()=>{
        componente.variable1 = false;
        componente.variable2 = false;
        componente.variable3 = false;
        expect(componente.probandoCondicionales()).toBe('ninguna es verdadera');
    })

    


})