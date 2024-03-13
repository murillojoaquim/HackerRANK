function birthdayCakeCandles(candles) {
    let maior = 0;
    let unidades = 0;
    for (let i = 0; i < candles.length; i++){
        if (candles[i] > maior) {
        maior = candles[i];
        unidades = 1;
        }
        
        else if (candles[i] === maior) {
            unidades++;
        }
    }
    return unidades;
}