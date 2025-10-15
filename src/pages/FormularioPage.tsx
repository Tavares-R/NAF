import { BrCard, BrItem, BrList, BrInput, BrButton, BrRadio, BrSelect } from '@govbr-ds/webcomponents-react';
import { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('pt-BR', ptBR);


interface IFormularioData {
    dataAtendimento: Date | null;
    modalidade: string;
    tipoUsuario: string;
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

        setFormData(prevState => ({...prevState, [fieldname]: value}))
    }

    const handleSubmit = () => {
        const dadosCompletos = {
            atendente: usuarioLogado,
            atendimento: formData,
        }

        alert(JSON.stringify(dadosCompletos, null, 2));
    }

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

        <div className="form-fields mt-4">
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


            
            <div className="br-grid">

                {/* Campo Tipo de usuário  */}
                <div className="br-col-sm-6 br-col-lg-4 mb-4">
                    <BrSelect
                        label="3. Tipo de usuário *" placeholder="Selecione uma opção"
                        options={JSON.stringify([
                            { label: 'Pessoa Física', value: 'pf' },
                            { label: 'Pessoa Jurídica', value: 'pj' },
                        ])}
                        onValueChange={(e) => handleComponentChange(e, 'tipoUsuario')}
                    />
                </div>
                {/* Campo atendimento conclusivo  */}
                <div className="br-col-sm-6 br-col-lg-4 mb-4">
                    <BrSelect
                        label="4. O atendimento prestado foi conclusivo? *" placeholder="Selecione uma opção"
                        options={JSON.stringify([
                            { label: 'Sim', value: 'sim' },
                            { label: 'Não', value: 'nao' },
                        ])}
                        onValueChange={(e) => handleComponentChange(e, 'atendimentoConclusivo')}
                    />
                </div>

            </div>
            {/* Campo tipo de atendimento  */}
            <div className="mb-4">
                <p className="label mb-2">5. Tipo de atendimento *</p>
                <div className='mb-2'><BrRadio name="tipoAtendimento" label="Auxílio à elaboração e orientações sobre a Declaração de Ajuste Anual do IRPF" value="irpf" onCheckedChange={(e) => handleRadioChange(e, 'tipoAtendimento')} /></div>
                <div className='mb-2'><BrRadio name="tipoAtendimento" label="Auxílio à inscrição e Informações cadastrais de CPF" value="cpf" onCheckedChange={(e) => handleRadioChange(e, 'tipoAtendimento')} /></div>
                <div className='mb-2'><BrRadio name="tipoAtendimento" label="Auxílio à inscrição e Informações cadastrais do CNPJ" value="cnpj" onCheckedChange={(e) => handleRadioChange(e, 'tipoAtendimento')} /></div>
                <div className='mb-2'><BrRadio name="tipoAtendimento" label="Outra" value="outra" onCheckedChange={(e) => handleRadioChange(e, 'tipoAtendimento')} /></div>
                
                
                
                
                {formData.tipoAtendimento === 'outra' && (
                    <div className="mt-2" style={{ maxWidth: '400px' }}>
                        <BrInput
                            label="Especifique qual"
                            placeholder="Digite o tipo de atendimento"
                            onValueChange={(e) => handleComponentChange(e, 'tipoAtendimentoOutro')}
                        />
                    </div>
                )}

            </div>
        </div>


        {/* Botão de submit  */}
        <div className="form-actions mt-4">
            <BrButton emphasis='primary' onClick={handleSubmit}>
            Enviar Formulário
            </BrButton>
        </div>
    </div>
  )
}


