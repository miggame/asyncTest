export default class ObserverMgr {
    public static obsArray:object = {};
    //注册事件
    //func 为函数
    // ob为作用域
    public static addEventListener(msg, func, ob){
        if(typeof ob === 'undefined'){
            console.log('[ObserverMgr] 注册消息[%s]:%s 的作用于未定义', msg, func.name);
        }
        let obs = this.obsArray[msg];
        if(typeof obs === 'undefined'){
            this.obsArray[msg] = [];
        }
        for(let k = 0;k<this.obsArray[msg].length;k++){
            let item = this.obsArray[msg][k];
            if(item['func'] === func && item['ob'] === ob){
                return;
            }
        }
        this.obsArray[msg].push({func: func, ob:ob});
    }

    public static removeEventListener(msg, func, ob){
        let b = false;
        let msgCBArray = this.obsArray[msg];
        if(msgCBArray){
            for(let i = 0;i<msgCBArray.length;){
                let msgCBItem = msgCBArray[i];
                let itemFunc = msgCBItem['func'];
                let itemOb = msgCBItem['ob'];
                if(func === itemFunc && ob === itemOb){
                    msgCBArray.splice(i, 1);
                    b = true;
                } else {
                    i++;
                }
            }
        }
        return b;
    }

    public static removeEventListenerWithObject(ob){
        for(let k in this.obsArray){
            let msgCBArray = this.obsArray[k];
            for(let i = 0;i<msgCBArray.length;){
                let msgCBItem = msgCBArray[i];
                if(msgCBItem['ob'] === ob){
                    msgCBArray.splice(i, 1);
                } else {
                    i++;
                }
            }
        }
    }

    public static cleanAllEventListener(){
        this.obsArray = {};
    }

    public static dispatchMsg(msg, data){
        let obs = this.obsArray[msg];
        if(typeof obs!=='undefined'){
            for(let k = 0;k<obs.length;k++){
                let item = obs[k];
                let func = item['func'];
                let ob = item['ob'];
                if(func&&ob){
                    func.apply(ob, [msg, data]);
                }
            }
        }
    }
}