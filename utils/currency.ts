export const DollarConvertion = (amount:string, rate:number) => {
    const dotamount = amount.replace(',', '.');
    return (parseFloat(dotamount) * rate).toFixed(2);
};