const json_data = require('./banco/data.json');


function json_to_array(json_data){
    const result = [];
    for(var i in json_data){
        const obj = json_data[i];
        result.push([obj.id,obj.modalidade,obj.tipo,obj.distancia,obj.sexo,obj.local]);
    }
    return result;
}   


module.exports.json_to_array = json_to_array(json_data);

