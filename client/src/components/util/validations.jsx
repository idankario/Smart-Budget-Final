export const isRequire = async (dataForm, dataType) => {
    const errorsList = {};
    const isempty = (data, i) => {
        
        const { label } = dataType[i];
        if (data[1] === "undefined" || data[1].trim().length === 0) {
            errorsList[`${data[0]}`] = `*${label} is require`;
        }
    };
    
    Object.entries(dataForm).map(isempty);
    return errorsList;
}