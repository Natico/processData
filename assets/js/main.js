debugger;

list ;
bundle;
var bundleFa = bundle.fa.keywords;
var processMap = new Map();
var userMap = new Map();
function todo(){
    console.time("todo");
    for(let i=0; i<list.length ; i++){
        let item = list[i]; 
        if(processMap.get(item.process_code)){
            

        }else{            
            processMap.set(item.process_code ,item);
            item.bundleFa = bundleFa[item.process_code]
        }
        // bundleFa[item.process_code] && processMap.get(item.process_code) ? processListFa.push(bundleFa[item.process_code]): null;
        debugger;
    }
    console.timeEnd("todo");
}

