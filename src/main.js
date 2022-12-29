const fs = require('fs');
//import units_descriptinos
const units_descriptinos = require('./constTest');

function main(input) {

    let payload = input;

   
    // to test the wifi/3g parse
    // let payload = [
    //  {
    //      variable: 'data',
    //  time: '2019-01-21 17:07:03',
    //  metadata:
    //  {
    //  U0: 220.00,
    //  I0: 5.00,
    //  P1: 0.00,
    //  P2: 0.00,
    //  P3: 0.00,
    //  FP0: 0.00,
    //  EA: 0.00,
    //  CE: 1,
    //  },
    //  },
    // ]; 

    // to test this lora parse



    const data = payload;
    if (data && data.metadata) {
        const serie = Date.now();
        const keys = Object.keys(data.metadata);
        keys.forEach((key) => {
            payload.push({
                variable: String(key).toLowerCase(),
                value: data.metadata[key],
                time: data.time,
                serie,
                unit: units_descriptinos[String(key).toLowerCase()].unit,
            });
        });
    }
    // Lora Payload
    // ==============================================================================
    function getBiggest(biggest) {
        const biggest_data = {};
        switch (String(biggest).toUpperCase()) {
            case '00':
                biggest_data.variable = 'u0';
                biggest_data.unit = 'V';
                biggest_data.description = 'Tensão trifásica';
                break;
            case '01':
                biggest_data.variable = 'u12';
                biggest_data.unit = 'V';
                biggest_data.description = 'Tensão Fase/Fase U12';
                break;
            case '02':
                biggest_data.variable = 'u23';
                biggest_data.unit = 'V';
                biggest_data.description = 'Tensão Fase/Fase U23';
                break;
            case '03':
                biggest_data.variable = 'u31';
                biggest_data.unit = 'V';
                biggest_data.description = 'Tensão Fase/Fase U31';
                break;
            case '04':
                biggest_data.variable = 'u1';
                biggest_data.unit = 'V';
                biggest_data.description = 'Tensão da Fase 1';
                break;
            case '05':
                biggest_data.variable = 'u2';
                biggest_data.unit = 'V';
                biggest_data.description = 'Tensão da Fase 2';
                break;
            case '06':
                biggest_data.variable = 'u3';
                biggest_data.unit = 'V';
                biggest_data.description = 'Tensão da Fase 3';
                break;
            case '07':
                biggest_data.variable = 'i0';
                biggest_data.unit = 'A';
                biggest_data.description = 'Corrente Trifásica';
                break;
            case '08':
                biggest_data.variable = 'in';
                biggest_data.unit = 'A';
                biggest_data.description = 'Corrente de Neutro';
                break;
            case '09':
                biggest_data.variable = 'i1';
                biggest_data.unit = 'A';
                biggest_data.description = 'Corrente da Fase 1';
                break;
            case '0A':
                biggest_data.variable = 'i2';
                biggest_data.unit = 'A';
                biggest_data.description = 'Corrente da Fase 2';
                break;
            case '0B':
                biggest_data.variable = 'i3';
                biggest_data.unit = 'A';
                biggest_data.description = 'Corrente da Fase 3';
                break;
            case '0C':
                biggest_data.variable = 'f1';
                biggest_data.unit = 'Hz';
                biggest_data.description = 'Frequência da Fase 1';
                break;
            case '0D':
                biggest_data.variable = 'f2';
                biggest_data.unit = 'Hz';
                biggest_data.description = 'Frequência da Fase 2';
                break;
            case '0E':
                biggest_data.variable = 'f3';
                biggest_data.unit = 'Hz';
                biggest_data.description = 'Frequência da Fase 3';
                break;
            case '0F':
                biggest_data.variable = 'fiec';
                biggest_data.unit = 'Hz';
                biggest_data.description = 'Frequência Fase 1 (IEC – 10seg)';
                break;
            case '10':
                biggest_data.variable = 'p0';
                biggest_data.unit = 'W';
                biggest_data.description = 'Potência Ativa Trifásica';
                break;
            case '11':
                biggest_data.variable = 'p1';
                biggest_data.unit = 'W';
                biggest_data.description = 'Potência Ativa Linha 1';
                break;
            case '12':
                biggest_data.variable = 'p2';
                biggest_data.unit = 'W';
                biggest_data.description = 'Potência Ativa Linha 2';
                break;
            case '13':
                biggest_data.variable = 'p3';
                biggest_data.unit = 'W';
                biggest_data.description = 'Potência Ativa Linha 3';
                break;
            case '14':
                biggest_data.variable = 'q0';
                biggest_data.unit = 'VAr';
                biggest_data.description = 'Potência Reativa Trifásica';
                break;
            case '15':
                biggest_data.variable = 'q1';
                biggest_data.unit = 'VAr';
                biggest_data.description = 'Potência Reativa Linha 1';
                break;
            case '16':
                biggest_data.variable = 'q2';
                biggest_data.unit = 'VAr';
                biggest_data.description = 'Potência Reativa Linha 2';
                break;
            case '17':
                biggest_data.variable = 'q3';
                biggest_data.unit = 'VAr';
                biggest_data.description = 'Potência Reativa Linha 3';
                break;
            case '18':
                biggest_data.variable = 's0';
                biggest_data.unit = 'VA';
                biggest_data.description = 'Potência Aparente Trifásica';
                break;
            case '19':
                biggest_data.variable = 's1';
                biggest_data.unit = 'VA';
                biggest_data.description = 'Potência Aparente Linha 1';
                break;
            case '1A':
                biggest_data.variable = 's2';
                biggest_data.unit = 'VA';
                biggest_data.description = 'Potência Aparente Linha 2';
                break;
            case '1B':
                biggest_data.variable = 's3';
                biggest_data.unit = 'VA';
                biggest_data.description = 'Potência Aparente Linha 3';
                break;
            case '1C':
                biggest_data.variable = 'fp0';
                biggest_data.unit = null;
                biggest_data.description = 'Fator de Potência Trifásico';
                break;
            case '1D':
                biggest_data.variable = 'fp1';
                biggest_data.unit = null;
                biggest_data.description = 'Fator de Potência Linha 1';
                break;
            case '1E':
                biggest_data.variable = 'fp2';
                biggest_data.unit = null;
                biggest_data.description = 'Fator de Potência Linha 2';
                break;
            case '1F':
                biggest_data.variable = 'fp3';
                biggest_data.unit = null;
                biggest_data.description = 'Fator de Potência Linha 3';
                break;
            case '20':
                biggest_data.variable = 'fp0d';
                biggest_data.unit = null;
                biggest_data.description = 'Fator de Potência de Deslocamento Trifásico';
                break;
            case '21':
                biggest_data.variable = 'fp1d';
                biggest_data.unit = null;
                biggest_data.description = 'Fator de Potência de Deslocamento Linha 1';
                break;
            case '22':
                biggest_data.variable = 'fp2d';
                biggest_data.unit = null;
                biggest_data.description = 'Fator de Potência de Deslocamento Linha 2';
                break;
            case '23':
                biggest_data.variable = 'fp3d';
                biggest_data.unit = null;
                biggest_data.description = 'Fator de Potência de Deslocamento Linha 3';
                break;
            case '24':
                biggest_data.variable = 'edp1';
                biggest_data.unit = null;
                biggest_data.description = 'Contador EDP-1';
                break;
            case '25':
                biggest_data.variable = 'edp2';
                biggest_data.unit = null;
                biggest_data.description = 'Contador EDP-2';
                break;
            case '26':
                biggest_data.variable = 'edp3';
                biggest_data.unit = null;
                biggest_data.description = 'Contador EDP-3';
                break;
            case '27':
                biggest_data.variable = 'edp1s';
                biggest_data.unit = null;
                biggest_data.description = 'Status da EDP-1';
                break;
            case '28':
                biggest_data.variable = 'edp2s';
                biggest_data.unit = null;
                biggest_data.description = 'Status da EDP-2';
                break;
            case '29':
                biggest_data.variable = 'edp3s';
                biggest_data.unit = null;
                biggest_data.description = 'Status da EDP-3';
                break;
            case '2A':
                biggest_data.variable = 'sds1';
                biggest_data.unit = null;
                biggest_data.description = 'Status da SD-1';
                break;
            case '2B':
                biggest_data.variable = 'sds2';
                biggest_data.unit = null;
                biggest_data.description = 'Status da SD-2';
                break;
            case '2C':
                biggest_data.variable = 'io1';
                biggest_data.unit = null;
                biggest_data.description = 'Entrada Analógica 1';
                break;
            case '2D':
                biggest_data.variable = 'io2';
                biggest_data.unit = null;
                biggest_data.description = 'Entrada Analógica 2';
                break;
            case '2E':
                biggest_data.variable = 'ea';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Energia Ativa Positiva';
                break;
            case '2F':
                biggest_data.variable = 'er';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Energia Reativa Positiva';
                break;
            case '30':
                biggest_data.variable = 'ean';
                biggest_data.unit = 'KWh';
                biggest_data.description = 'Energia Ativa Negativa';
                break;
            case '31':
                biggest_data.variable = 'ern';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Energia Reativa Negativa';
                break;
            case '32':
                biggest_data.variable = 'mda';
                biggest_data.unit = 'kW';
                biggest_data.description = 'Máx. Demanda Ativa ';
                break;
            case '33':
                biggest_data.variable = 'da';
                biggest_data.unit = 'kW';
                biggest_data.description = 'Demanda Ativa';
                break;
            case '34':
                biggest_data.variable = 'mds';
                biggest_data.unit = 'kVA';
                biggest_data.description = 'Máx. Demanda Aparente';
                break;
            case '35':
                biggest_data.variable = 'ds';
                biggest_data.unit = 'kVA';
                biggest_data.description = 'Demanda Aparente';
                break;
            case '36':
                biggest_data.variable = 'mdr';
                biggest_data.unit = 'kVAr';
                biggest_data.description = 'Máx. Demanda Reativa';
                break;
            case '37':
                biggest_data.variable = 'dr';
                biggest_data.unit = 'kVAr';
                biggest_data.description = 'Demanda Reativa';
                break;
            case '38':
                biggest_data.variable = 'mdi';
                biggest_data.unit = 'A';
                biggest_data.description = 'Máx. Demanda Corrente';
                break;
            case '39':
                biggest_data.variable = 'di';
                biggest_data.unit = 'A';
                biggest_data.description = 'Demanda Corrente';
                break;
            case '3A':
                biggest_data.variable = 'es';
                biggest_data.unit = 'kVAh';
                biggest_data.description = 'Energia Aparente';
                break;
            case '3B':
                biggest_data.variable = 'thdu1';
                biggest_data.unit = '%';
                biggest_data.description = 'THD da Tensão da fase 1';
                break;
            case '3C':
                biggest_data.variable = 'thdu2';
                biggest_data.unit = '%';
                biggest_data.description = 'THD da Tensão da fase 2';
                break;
            case '3D':
                biggest_data.variable = 'thdu3';
                biggest_data.unit = '%';
                biggest_data.description = 'THD da Tensão da fase 3';
                break;
            case '3E':
                biggest_data.variable = 'thdi1';
                biggest_data.unit = '%';
                biggest_data.description = 'THD da Corrente da fase 1';
                break;
            case '3F':
                biggest_data.variable = 'thdi2';
                biggest_data.unit = '%';
                biggest_data.description = 'THD da Corrente da fase 2';
                break;
            case '40':
                biggest_data.variable = 'thdi3';
                biggest_data.unit = '%';
                biggest_data.description = 'THD da Corrente da fase 3';
                break;
            case '41':
                biggest_data.variable = 'thdau1';
                biggest_data.unit = '%';
                biggest_data.description = 'THD de agrupamento da Tensão da fase 1';
                break;
            case '42':
                biggest_data.variable = 'thdau2';
                biggest_data.unit = '%';
                biggest_data.description = 'THD de agrupamento da Tensão da fase 2';
                break;
            case '43':
                biggest_data.variable = 'thdau3';
                biggest_data.unit = '%';
                biggest_data.description = 'THD de agrupamento da Tensão da fase 3';
                break;
            case '44':
                biggest_data.variable = 'thdai1';
                biggest_data.unit = '%';
                biggest_data.description = 'THD de agrupamento da Corrente da fase 1';
                break;
            case '45':
                biggest_data.variable = 'thdai2';
                biggest_data.unit = '%';
                biggest_data.description = 'THD de agrupamento da Corrente da fase 2';
                break;
            case '46':
                biggest_data.variable = 'thdai3';
                biggest_data.unit = '%';
                biggest_data.description = 'THD de agrupamento da Corrente da fase 3';
                break;
            case '47':
                biggest_data.variable = 'temp';
                biggest_data.unit = 'ºC';
                biggest_data.description = 'Temperatura';
                break;
            case '48':
                biggest_data.variable = 'ea1';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Energia Ativa Positiva Fase 1';
                break;
            case '49':
                biggest_data.variable = 'er1';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Energia Reativa Positiva Fase 1';
                break;
            case '4A':
                biggest_data.variable = 'ean1';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Energia Ativa Negativa Fase 1';
                break;
            case '4B':
                biggest_data.variable = 'ern1';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Energia Reativa Negativa Fase 1';
                break;
            case '4C':
                biggest_data.variable = 'ea2';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Energia Ativa Positiva Fase 2';
                break;
            case '4D':
                biggest_data.variable = 'er2';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Energia Reativa Positiva Fase 2';
                break;
            case '4E':
                biggest_data.variable = 'ean2';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Energia Ativa Negativa Fase 2';
                break;
            case '4F':
                biggest_data.variable = 'ern2';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Energia Reativa Negativa Fase 2';
                break;
            case '50':
                biggest_data.variable = 'ea3';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Energia Ativa Positiva Fase 3';
                break;
            case '51':
                biggest_data.variable = 'er3';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Energia Reativa Positiva Fase 3';
                break;
            case '52':
                biggest_data.variable = 'ean3';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Energia Ativa Negativa Fase 3';
                break;
            case '53':
                biggest_data.variable = 'ern3';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Energia Reativa Negativa Fase 3';
                break;
            case '54':
                biggest_data.variable = 'es1';
                biggest_data.unit = 'kVAh';
                biggest_data.description = 'Energia Aparente Fase 1';
                break;
            case '55':
                biggest_data.variable = 'es2';
                biggest_data.unit = 'kVAh';
                biggest_data.description = 'Energia Aparente Fase 2';
                break;
            case '56':
                biggest_data.variable = 'es3';
                biggest_data.unit = 'kVAh';
                biggest_data.description = 'Energia Aparente Fase 3';
                break;
            case '57':
                biggest_data.variable = 'lsts';
                biggest_data.unit = null;
                biggest_data.description = 'Status da Carga';
                break;
            case '58':
                biggest_data.variable = 'horim';
                biggest_data.unit = 'h';
                biggest_data.description = 'Horímetro';
                break;
            case '59':
                biggest_data.variable = 'deseq';
                biggest_data.unit = '%';
                biggest_data.description = 'Desequilíbrio de Tensão';
                break;
            case '5A':
                biggest_data.variable = 'fk1';
                biggest_data.unit = null;
                biggest_data.description = 'Fator K Linha 1';
                break;
            case '5B':
                biggest_data.variable = 'fk2';
                biggest_data.unit = null;
                biggest_data.description = 'Fator K Linha 2';
                break;
            case '5C':
                biggest_data.variable = 'fk3';
                biggest_data.unit = null;
                biggest_data.description = 'Fator K Linha 3';
                break;
            case '5D':
                biggest_data.variable = 'edp1p';
                biggest_data.unit = null;
                biggest_data.description = 'Tempo do Pulso da EDP-1';
                break;
            case '5E':
                biggest_data.variable = 'edp2p';
                biggest_data.unit = null;
                biggest_data.description = 'Tempo do Pulso da EDP-2';
                break;
            case '5F':
                biggest_data.variable = 'edp3p';
                biggest_data.unit = null;
                biggest_data.description = 'Tempo do Pulso da EDP-3';
                break;
            case '60':
                biggest_data.variable = 'ead';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Delta Energia Ativa Positiva';
                break;
            case '61':
                biggest_data.variable = 'erd';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Delta Energia Reativa Positiva';
                break;
            case '62':
                biggest_data.variable = 'eand';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Delta Energia Ativa Negativa';
                break;
            case '63':
                biggest_data.variable = 'ernd';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Delta Energia Reativa Negativa';
                break;
            case '64':
                biggest_data.variable = 'esd';
                biggest_data.unit = 'kVAh';
                biggest_data.description = 'Delta Energia Aparente';
                break;
            case '65':
                biggest_data.variable = 'ea1d';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Delta Energia Ativa Positiva Fase 1';
                break;
            case '66':
                biggest_data.variable = 'er1d';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Delta Energia Reativa Positiva Fase 1';
                break;
            case '67':
                biggest_data.variable = 'ea1nd';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Delta Energia Ativa Negativa Fase 1';
                break;
            case '68':
                biggest_data.variable = 'er1nd';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Delta Energia Reativa Negativa Fase 1';
                break;
            case '69':
                biggest_data.variable = 'ea2d';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Delta Energia Ativa Positiva Fase 2';
                break;
            case '6A':
                biggest_data.variable = 'er2d';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Delta Energia Reativa Positiva Fase 2';
                break;
            case '6B':
                biggest_data.variable = 'ea2nd';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Delta Energia Ativa Negativa Fase 2';
                break;
            case '6C':
                biggest_data.variable = 'er2nd';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Delta Energia Reativa Negativa Fase 2';
                break;
            case '6D':
                biggest_data.variable = 'ea3d';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Delta Energia Ativa Positiva Fase 3';
                break;
            case '6E':
                biggest_data.variable = 'er3d';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Delta Energia Reativa Positiva Fase 3';
                break;
            case '6F':
                biggest_data.variable = 'ea3nd';
                biggest_data.unit = 'kWh';
                biggest_data.description = 'Delta Energia Ativa Negativa Fase 3';
                break;
            case '70':
                biggest_data.variable = 'er3nd';
                biggest_data.unit = 'kVArh';
                biggest_data.description = 'Delta Energia Reativa Negativa Fase 3';
                break;
            case '71':
                biggest_data.variable = 'es1d';
                biggest_data.unit = 'kVAh';
                biggest_data.description = 'Delta Energia Aparente Fase 1';
                break;
            case '72':
                biggest_data.variable = 'es2d';
                biggest_data.unit = 'kVAh';
                biggest_data.description = 'Delta Energia Aparente Fase 2';
                break;
            case '73':
                biggest_data.variable = 'es3d';
                biggest_data.unit = 'kVAh';
                biggest_data.description = 'Delta Energia Aparente Fase 3';
                break;
            default:
                biggest_data.variable = 'ce';
                biggest_data.unit = null;
                biggest_data.description = 'Código de Erro';
        }
        return biggest_data;
    }

    const hexToFloat32 = (str) => {
        const int = parseInt(str, 16);
        if (int > 0 || int < 0) {
            // eslint-disable-next-line no-bitwise
            const sign = (int >>> 31) ? -1 : 1;
            // eslint-disable-next-line
            let exp = (int >>> 23 & 0xff) - 127;
            // eslint-disable-next-line
            const mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
            let float32 = 0;
            // eslint-disable-next-line
            for (i = 0; i < mantissa.length; i += 1) {
                float32 += parseInt(mantissa[i]) ? Math.pow(2, exp
                ) : 0; exp--
            }
            return float32 * sign;
        }

        return 0;
    };

    function chunkSubstr(str, size) {
        if (typeof str !== 'string') {
            throw new Error('str must be a string');
        }
        const numChunks = Math.ceil(str.length / size);
        const chunks = new Array(numChunks);
        for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
            chunks[i] = str.substring(o, o + size);
        }
        return chunks;
    }


    function decoder(payload, serie) {
        const data = [];
        payload = chunkSubstr(payload, 8);
        for (const item of payload) {
            const biggest = getBiggest(String(item).slice(0, 2));
            const value = Number((hexToFloat32(`${String(item).slice(2, 8)}00`)).toFixed(2));
            data.push({
                variable: biggest.variable, // function(biggest)
                value,
                serie,
                unit: biggest.unit,
                metadadata: {
                    description: biggest.description,
                },
            });
        }
        return data;
    }

    function generateData(parsed_data) {
        // If your device is sending something different than hex, like base64, just specify it bellow.
        const metadata = {};
        parsed_data.forEach((x) => {
            metadata[`${x.variable}`] = x.value;
        });
        console.log(metadata);
        const obj = {
            variable: 'data',
            serie: Date.now(),
            metadata,
        };
        return obj;
    }

    const payload_lora = payload;
    if (payload_lora) {
        const serie = Date.now();
        payload = decoder(payload, serie);
        payload.push(generateData(payload));
    }


    return payload;
}


function getPaylodFromUserConsole() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        readline.question('Payload: ', (payload) => {
            readline.close();
            resolve(payload);
        });
    });
}

getPaylodFromUserConsole().then((payload) => {
    const res = main(payload);
    //create a json file with the result

    fs.writeFile('result.json', JSON.stringify(res), (err) => {
        if (err) {
            console.log(err);
        }
    }
    );
});



// let payload = [{
//     variable: 'payload',
//     value: '0442F8E6094246510C426F661145AD8916454A001945C0D11D3F66662D49BCF42E498946FF3F8000',
// }];

// const res = main(payload);
// //chamar funcao principal
// console.log(res);
