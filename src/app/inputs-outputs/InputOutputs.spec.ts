import { InputOutputsComponent } from "./InputsOutputs";

describe('Probando inputs y outputs', ()=>{
    let componente: InputOutputsComponent;

    beforeEach(()=>{
        componente = new InputOutputsComponent();
    })

    it('probando input',()=>{
        expect(componente.entrada).toBe('default'); 
        componente.entrada = 'otro valor';
        expect(componente.entrada).toBe('otro valor');
    })

    it('probando output',()=>{
        const ARG: string = 'emitiendo';
        componente.salida.subscribe(valor => {
            expect(valor).toBe(ARG);
        })
        componente.emitirAlgo(ARG);
    })

    it('probando borrar entrada',()=>{
        componente.borrarEntrada();
        expect(componente.entrada).toBe('');
    })
})