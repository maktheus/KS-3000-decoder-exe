const units_descriptinos = {
    u0: {
        unit: 'V',
        description: 'Tensão trifásica',
    },
    u12: {
        unit: 'V',
        description: 'Tensão Fase/Fase U12',
    },
    u23: {
        unit: 'V',
        description: 'Tensão Fase/Fase U23',
    },
    u31: {
        unit: 'V',
        description: 'Tensão Fase/Fase U31',
    },
    u1: {
        unit: 'V',
        description: 'Tensão da Fase 1',
    },
    u2: {
        unit: 'V',
        description: 'Tensão da Fase 2',
    },
    u3: {
        unit: 'V',
        description: 'Tensão da Fase 3',
    },
    i0: {
        unit: 'A',
        description: 'Corrente trifásica',
    },
    in: {
        unit: 'A',
        description: 'Corrente de Neutro',
    },
    i1: {
        unit: 'A',
        description: 'Corrente da Fase 1',
    },
    i2: {
        unit: 'A',
        description: 'Corrente da Fase 2',
    },
    i3: {
        unit: 'A',
        description: 'Corrente da Fase 3',
    },
    f1: {
        unit: 'Hz',
        description: 'Frequência da Fase 1',
    },
    f2: {
        unit: 'Hz',
        description: 'Frequência da Fase 2',
    },
    f3: {
        unit: 'Hz',
        description: 'Frequência da Fase 3',
    },
    fiec: {
        unit: 'Hz',
        description: 'Frequência Fase 1 (IEC – 10seg)',
    },
    p0: {
        unit: 'W',
        description: 'Potência Ativa Trifásica',
    },
    p1: {
        unit: 'W',
        description: 'Potência Ativa Linha 1',
    },
    p2: {
        unit: 'W',
        description: 'Potência Ativa Linha 2',
    },
    p3: {
        unit: 'W',
        description: 'Potência Ativa Linha 3',
    },
    q0: {
        unit: 'VAr',
        description: 'Potência Reativa Trifásica',
    },
    q1: {
        unit: 'VAr',
        description: 'Potência Reativa Linha 1',
    },
    q2: {
        unit: 'VAr',
        description: 'Potência Reativa Linha 2',
    },
    q3: {
        unit: 'VAr',
        description: 'Potência Reativa Linha 3',
    },
    s0: {
        unit: 'VA',
        description: 'Potência Aparente Trifásica',
    },
    s1: {
        unit: 'VA',
        description: 'Potência Aparente Linha 1',
    },
    s2: {
        unit: 'VA',
        description: 'Potência Aparente Linha 2',
    },
    s3: {
        unit: 'VA',
        description: 'Potência Aparente Linha 3',
    },
    fp0: {
        unit: null,
        description: 'Fator de Potência Trifásico',
    },
    fp1: {
        unit: null,
        description: 'Fator de Potência Linha 1',
    },
    fp2: {
        unit: null,
        description: 'Fator de Potência Linha 2',
    },
    fp3: {
        unit: null,
        description: 'Fator de Potência Linha 3',
    },
    edp1: {
        unit: null,
        description: 'Contador da EDP-1',
    },
    edp2: {
        unit: null,
        description: 'Contador da EDP-2',
    },
    edp3: {
        unit: null,
        description: 'Contador da EDP-3',
    },
    edp1s: {
        unit: null,
        description: 'Status da EDP-1',
    },
    edp2s: {
        unit: null,
        description: 'Status da EDP-2',
    },
    edp3s: {
        unit: null,
        description: 'Status da EDP-3',
    },
    sds1: {
        unit: null,
        description: 'Status da SD-1',
    },
    sds2: {
        unit: null,
        description: 'Status da SD-2',
    },
    thdu1: {
        unit: '%',
        description: 'THD da Tensão da fase 1',
    },
    thdu2: {
        unit: '%',
        description: 'THD da Tensão da fase 2',
    },
    thdu3: {
        unit: '%',
        description: 'THD da Tensão da fase 3',
    },
    thdi1: {
        unit: '%',
        description: 'THD da Corrente da fase 1',
    },
    thdi2: {
        unit: '%',
        description: 'THD da Corrente da fase 2',
    },
    thdi3: {
        unit: '%',
        description: 'THD da Corrente da fase 3',
    },
    thdau1: {
        unit: '%',
        description: 'THD de agrupamento da Tensão da fase 1',
    },
    thdau2: {
        unit: '%',
        description: 'THD de agrupamento da Tensão da fase 2',
    },
    thdau3: {
        unit: '%',
        description: 'THD de agrupamento da Tensão da fase 3',
    },
    thdai1: {
        unit: '%',
        description: 'THD de agrupamento da Corrente da fase 1',
    },
    thdai2: {
        unit: '%',
        description: 'THD de agrupamento da Corrente da fase 2',
    },
    thdai3: {
        unit: '%',
        description: 'THD de agrupamento da Corrente da fase 3',
    },
    temp: {
        unit: 'ºC',
        description: 'Temperatura em graus Celsius',
    },
    io1: {
        unit: null,
        description: 'Entrada analógica 1',
    },
    io2: {
        unit: null,
        description: 'Entrada analógica 2',
    },
    ea: {
        unit: 'kWh',
        description: 'Energia Ativa Positiva',
    },
    ean: {
        unit: 'kWh',
        description: 'Energia Ativa Negativa',
    },
    er: {
        unit: 'kVArh',
        description: 'Energia Reativa Positiva',
    },
    ern: {
        unit: 'kVArh',
        description: 'Energia Reativa Negativa',
    },
    mda: {
        unit: 'kW',
        description: 'Máx. Demanda Ativa',
    },
    da: {
        unit: 'kW',
        description: 'Demanda Ativa',
    },
    mds: {
        unit: 'kVA',
        description: 'Máx. Demanda Aparente',
    },
    ds: {
        unit: 'kVA',
        description: 'Demanda Aparente',
    },
    ce: {
        unit: null,
        description: 'Código de erro',
    },
    fp0d: {
        unit: null,
        description: 'Fator de Potência de Deslocamento Trifásico',
    },
    fp1d: {
        unit: null,
        description: 'Fator de Potência de Deslocamento Linha 1',
    },
    fp2d: {
        unit: null,
        description: 'Fator de Potência de Deslocamento Linha 2',
    },
    fp3d: {
        unit: null,
        description: 'Fator de Potência de Deslocamento Linha 3',
    },
    mdr: {
        unit: 'kVAr',
        description: 'Máx Demanda Reativa',
    },
    dr: {
        unit: 'kVAr',
        description: 'Demanda Reativa',
    },
    mdi: {
        unit: 'A',
        description: 'Máx Demanda de Corrente',
    },
    di: {
        unit: 'A',
        description: 'Demanda de Corrente',
    },
    es: {
        unit: 'kVAh',
        description: 'Energia Aparente',
    },
    ea1: {
        unit: 'kWh',
        description: 'Energia Ativa Positiva Fase 1',
    },
    er1: {
        unit: 'kVArh',
        description: 'Energia Reativa Positiva Fase 1',
    },
    ean1: {
        unit: 'kWh',
        description: 'Energia Ativa Negativa Fase 1',
    },
    ern1: {
        unit: 'kVArh',
        description: 'Energia Reativa Negativa Fase 1',
    },
    ea2: {
        unit: 'kWh',
        description: 'Energia Ativa Positiva Fase 2',
    },
    er2: {
        unit: 'kVArh',
        description: 'Energia Reativa Positiva Fase 2',
    },
    ean2: {
        unit: 'kWh',
        description: 'Energia Ativa Negativa Fase 2',
    },
    ern2: {
        unit: 'kVArh',
        description: 'Energia Reativa Negativa Fase 2',
    },
    ea3: {
        unit: 'kWh',
        description: 'Energia Ativa Positiva Fase 3',
    },
    er3: {
        unit: 'kVArh',
        description: 'Energia Reativa Positiva Fase 3',
    },
    ean3: {
        unit: 'kWh',
        description: 'Energia Ativa Negativa Fase 3',
    },
    ern3: {
        unit: 'kVArh',
        description: 'Energia Reativa Negativa Fase 3',
    },
    es1: {
        unit: 'kVAh',
        description: 'Energia Aparente Fase 1',
    },
    es2: {
        unit: 'kVAh',
        description: 'Energia Aparente Fase 2',
    },
    es3: {
        unit: 'kVAh',
        description: 'Energia Aparente Fase 3',
    },
    lsts: {
        unit: null,
        description: 'Status da Carga',
    },
    horim: {
        unit: 'h',
        description: 'Horímetro',
    },
    deseq: {
        unit: '%',
        description: 'Desequilíbrio de Tensão',
    },
    fk1: {
        unit: null,
        description: 'Fator K Linha 1',
    },
    fk2: {
        unit: null,
        description: 'Fator K Linha 2',
    },
    fk3: {
        unit: null,
        description: 'Fator K Linha 3',
    },
    edp1p: {
        unit: null,
        description: 'Tempo do Pulso da EDP-1',
    },
    edp2p: {
        unit: null,
        description: 'Tempo do Pulso da EDP-2',
    },
    edp3p: {
        unit: null,
        description: 'Tempo do Pulso da EDP-3',
    },
    ead: {
        unit: 'kWh',
        description: 'Delta Energia Ativa Positiva',
    },
    erd: {
        unit: 'kVArh',
        description: 'Delta Energia Reativa Positiva',
    },
    eand: {
        unit: 'kWh',
        description: 'Delta Energia Ativa Negativa',
    },
    ernd: {
        unit: 'kVArh',
        description: 'Delta Energia Reativa Negativa',
    },
    esd: {
        unit: 'kVAh',
        description: 'Delta Energia Aparente',
    },
    ea1d: {
        unit: 'kWh',
        description: 'Delta Energia Ativa Positiva Fase 1',
    },
    er1d: {
        unit: 'kVArh',
        description: 'Delta Energia Reativa Positiva Fase 1',
    },
    ea1nd: {
        unit: 'kWh',
        description: 'Delta Energia Ativa Negativa Fase 1',
    },
    er1nd: {
        unit: 'kVArh',
        description: 'Delta Energia Reativa Negativa Fase 1',
    },
    ea2d: {
        unit: 'kWh',
        description: 'Delta Energia Ativa Positiva Fase 2',
    },
    er2d: {
        unit: 'kVArh',
        description: 'Delta Energia Reativa Positiva Fase 2',
    },
    ea2nd: {
        unit: 'kWh',
        description: 'Delta Energia Ativa Negativa Fase 2',
    },
    er2nd: {
        unit: 'kVArh',
        description: 'Delta Energia Reativa Negativa Fase 2',
    },
    ea3d: {
        unit: 'kWh',
        description: 'Delta Energia Ativa Positiva Fase 3',
    },
    er3d: {
        unit: 'kVArh',
        description: 'Delta Energia Reativa Positiva Fase 3',
    },
    ea3nd: {
        unit: 'kWh',
        description: 'Delta Energia Ativa Negativa Fase 3',
    },
    er3nd: {
        unit: 'kVArh',
        description: 'Delta Energia Reativa Negativa Fase 3',
    },
    es1d: {
        unit: 'kVAh',
        description: 'Delta Energia Aparente Fase 1',
    },
    es2d: {
        unit: 'kVAh',
        description: 'Delta Energia Aparente Fase 2',
    },
    es3d: {
        unit: 'kVAh',
        description: 'Delta Energia Aparente Fase 3',
    },
};


//export units_descriptinos

module.exports = units_descriptinos;
