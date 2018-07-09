import ObserverMgr from './ObserverMgr';

const {ccclass, property} = cc._decorator;

@ccclass
export default class Observer extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    public _getMsgList(){
        return [];
    }

    public _initMsg(){
        let list:string[] = this._getMsgList();
        for(let k = 0;k<list.length;k++){
            let msg = list[k];
            ObserverMgr.addEventListener(msg, this._onMsg, this);
        }
    }

    onLoad () {

    }
    
    public _onMsg(msg, data){

    }

    public _onError(msg, code, data){

    }

    public _onNetOpen(){

    }

    public _onErrorDeal(errorMsgString, data){
        let msgString = data[0];
        let errorCode = data[1];
        let errorData = data[2];
        this._onError(msgString, errorCode, errorData);
    }

    onDisable(){
        ObserverMgr.removeEventListenerWithObject(this);
    }

    onEnable(){

    }

    onDestroy(){
        ObserverMgr.removeEventListenerWithObject(this);
    }
    

    // start () {

    // }

    // update (dt) {}
}
