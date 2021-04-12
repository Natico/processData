
list ;
bundle;
var bundleFa = bundle.fa.keywords;
var processMap = new Map();
var userMap = new Map();
var engineMap = new Map();
var tekrriha = [];
todo()

function todo(){
    console.time("todo");
    for(let i=0; i<list.length ; i++){
        let item = list[i]; 
        item.bundleFa = bundleFa[item.process_code]
        if(processMap.has(item.process_code)){
            let valuesP = processMap.get(item.process_code)
            valuesP.push(item)
            processMap.set(item.process_code ,valuesP);
        }else{            
            processMap.set(item.process_code ,[item]);
        }
        // bundleFa[item.process_code] && processMap.get(item.process_code) ? processListFa.push(bundleFa[item.process_code]): null;


        if(engineMap.has(item.engine_name)){
            let valuesE = engineMap.get(item.engine_name)
            valuesE.push(item)
            engineMap.set(item.engine_name ,valuesE);
        }else{            
            engineMap.set(item.engine_name ,[item]);
        }

    }
    console.timeEnd("todo");
};



