import { BrCard, BrItem, BrList, BrInput, BrButton, BrRadio, BrSelect, BrTextarea } from '@govbr-ds/webcomponents-react';
import { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import { atendimentosPF, atendimentosMEI } from '../data/atendimentos';
registerLocale('pt-BR', ptBR);


interface IFormularioData {
    dataAtendimento: Date | null;
    modalidade: string;
    tipoUsuario: string;
    tipoUsuarioOutro: string;
    atendimentoConclusivo: string;
    tipoAtendimento: string;
    tipoAtendimentoOutro: string;
}


export function FormularioPage() {

    const usuarioLogado = {
    nome: "João da Silva",
    cpf: "123.456.789-00",
    unidadeFederativa: "Rio de Janeiro (RJ)",
    universidade: "Universidade Federal do Rio de Janeiro (UFRJ)",
  };


    const [formData, setFormData] = useState<IFormularioData>({
        dataAtendimento: null,
        modalidade: '',
        tipoUsuario: '',
        tipoUsuarioOutro: '',
        atendimentoConclusivo: '',
        tipoAtendimento: '',
        tipoAtendimentoOutro: '',
    })


    const handleDataChange = (date: Date | null) => {
        setFormData(prevState => ({
            ...prevState,
            dataAtendimento: date
        }))
    }

    const handleRadioChange = (event: any, fieldName: keyof IFormularioData) =>{
        const value = event.target.value;
        setFormData(prevState => ({...prevState, [fieldName]:value}))
    }

    const handleComponentChange = (event: any, fieldname: keyof IFormularioData) => {
        const value = event.detail !== undefined? event.detail : event.target.value;

        setFormData(prevState => {
            const newState = {
                ...prevState,
                [fieldname]: value,
            };

            if(fieldname === 'tipoUsuario') {
                newState.tipoAtendimento = '';
                newState.tipoAtendimentoOutro = '';
            }

            return newState;
        })
    }

    const handleSubmit = () => {
        const dadosCompletos = {
            atendente: usuarioLogado,
            atendimento: formData,
        }

        alert(JSON.stringify(dadosCompletos, null, 2));
    }

    const camposObrigatorios: (keyof IFormularioData)[] = [
    'dataAtendimento',
    'modalidade',
    'tipoUsuario',
    'atendimentoConclusivo',
    'tipoAtendimento',
    ]

    const isFormularioValido = camposObrigatorios.every(campo => {
        const valor = formData[campo];
        return valor !== null && valor !== undefined && valor !== '';
    });

  return (
    <div className="formulario-container">
        <h1 className="text-large text-bold mb-4">Ficha de Serviço Prestado</h1>
        <div className="mb-4">
            <h2 className="text-medium text-bold">Dados do Atendente</h2>
            <BrCard>
                <BrList isHorizontal>
                    <BrItem>
                        <strong>Nome:</strong> {usuarioLogado.nome}
                    </BrItem>
                    <BrItem>
                        <strong>UF:</strong> {usuarioLogado.unidadeFederativa}
                    </BrItem>
                    <BrItem>
                        <strong>Instituição de Ensino (NAF):</strong> {usuarioLogado.universidade}
                    </BrItem>
                </BrList>
            </BrCard>
        </div>

        <div className="br-divider"></div>

        <div className="form-fields mt-4 ml-4">
            <h2 className='text-medium text-bold mb-4'>Detalhes do Atendimento</h2>

            {/* Campo de data  */}
            <div className='br-input mb-4'>
                <label htmlFor="datepicker">1. Data de atendimento *</label> 
                <DatePicker
                    id="datepicker"
                    selected={formData.dataAtendimento}
                    onChange={handleDataChange}
                    dateFormat="dd/MM/yyyy"
                    className="br-input-field"
                    placeholderText="dd/mm/aaaa"
                    locale= "pt-BR"
                />
            </div>


            {/* Campo de modalidade  */}
            <div className='mb-4'>
                <p className="label mb-2">2. Modalidade de Atendimento *</p>
                <div className='d-flex'>
                    <BrRadio name="modalidade" label="Presencial" value="presencial" onCheckedChange={(e) => handleRadioChange(e, 'modalidade')} />
                    <BrRadio className="ml-4" name="modalidade" label="Remoto" value="remoto" onCheckedChange={(e) => handleRadioChange(e, 'modalidade')} />
                </div>
            </div>


            {/* Campo Tipo de usuário  */}
            <div className="mb-4">
                <BrSelect
                    label="3. Tipo de usuário *" placeholder="Selecione uma opção" 
                    options={JSON.stringify([
                        { label: 'Pessoa Física', value: 'pf' },
                        { label: 'Microempreendedor Individual', value: 'mei' },
                        { label: 'Pequenos Proprietários Rurais', value: 'rural' },
                        { label: 'Mulheres em situação de risco e vulnerabilidade conforme Programa Mulher Cidadã, Portaria MF 26/2023', value: 'mulher' },
                        { label: 'Entidade sem fins lucrativos', value: 'entidades' },
                        { label: 'Outra', value: 'outra' }
                    ])}
                    onValueChange={(e) => handleComponentChange(e, 'tipoUsuario')}
                />
                {formData.tipoUsuario === 'outra' && (
                    <div className="mt-2" style={{ maxWidth: '400px' }}>
                        <BrInput
                            label="Especifique qual"
                            placeholder="Digite o tipo de atendimento"
                            onValueChange={(e) => handleComponentChange(e, 'tipoUsuarioOutro')}
                        />
                    </div>
                )}

            </div>

            
             {/* Campo tipo de atendimento  */}
            {formData.tipoUsuario && (
                <div className="mb-4">
                    <p className="label mb-2">4. Tipo de atendimento *</p>
                    {formData.tipoUsuario =='pf' && atendimentosPF.map((atendimento) => (
                        <div className="mb-2" key={atendimento.id}>
                            <BrRadio name="tipoAtendimento" value = {atendimento.id} label = {atendimento.label} onCheckedChange={(e) => handleRadioChange(e, "tipoAtendimento")}/>
                        </div>
                    ))}

                    {formData.tipoUsuario =='mei' && atendimentosMEI.map((atendimento) => (
                        <div className="mb-2" key={atendimento.id}>
                            <BrRadio name="tipoAtendimento" value = {atendimento.id} label = {atendimento.label} onCheckedChange={(e) => handleRadioChange(e, "tipoAtendimento")}/>
                        </div>
                    ))}

                    {formData.tipoAtendimento.includes('outra') && (
                    <div className="mt-2" style={{ maxWidth: '400px' }}>
                        <BrTextarea
                            label="Especifique qual"
                            placeholder="Digite o tipo de atendimento"
                            onValueChange={(e) => handleComponentChange(e, 'tipoAtendimentoOutro')}
                        />
                    </div>
                )}
                </div>
            )}
           
             {/* Campo atendimento conclusivo  */}
             {formData.tipoAtendimento && (
                <div className="mb-4">
                    <p className="label mb-2">5. O atendimento prestado foi conclusivo? *</p>
                    <BrRadio name="atendimentoConclusivo" label="Sim" value="sim" onCheckedChange={(e) => handleRadioChange(e, 'atendimentoConclusivo')} />
                    <BrRadio className="ml-4" name="atendimentoConclusivo" label="Não" value="nao" onCheckedChange={(e) => handleRadioChange(e, 'atendimentoConclusivo')} />
                </div>
             )}

             {/* Botão de submit  */}
            <div className="form-actions mt-4">
                <BrButton emphasis='primary' onClick={handleSubmit} disabled={!isFormularioValido}>
                Enviar Formulário
                </BrButton>
            </div>
            
        </div>


        
    </div>
  )
}


