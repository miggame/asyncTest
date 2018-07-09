import Observer from '../core/Observer';
import { StateType } from '../core/StateType';
import { State } from '../core/State';
const {ccclass, property} = cc._decorator;
@ccclass
export default class Helloworld extends Observer {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Prefab)
    cocosPre: cc.Prefab = null;

    @property(cc.Prefab)
    prefab1: cc.Prefab = null;

    @property(cc.Node)
    _cocosNode: cc.Node = null;

    _state:number;

    _getMsgList(){
        return [
            StateType.DigGold,
            StateType.GoHome,
            StateType.GoShop
        ];
    }

    _onMsg(msg,data){
        if(msg === StateType.DigGold){
            this._state = StateType.DigGold;
        } else if(msg === StateType.GoHome){
            this._state = StateType.GoHome;
        } else if(msg === StateType.GoShop){
            this._state = StateType.GoShop;
        }
    }

    start () {
        // init logic
        this._initMsg();

        // this.label.string = this.text;

        // cc.loader.loadRes('cocos', (err, prefab)=>{
        //     this._cocosNode = cc.instantiate(prefab);
        //     this.node.addChild(this._cocosNode);
        //     // this.addPrefab(this._cocosNode);
        //     // this.node.dispatchEvent(new cc.Event.EventCustom('next', true));
        //     ObserverMgr.dispatchMsg('next', true);
        // });

        // this.addPrefab(this._cocosNode);

        let stateMgr = State.getInstance();
        stateMgr.update(1000);
        console.log('stateMgr: ', stateMgr);
        // console.log(stateMgr.refresh());
    }

    // addPrefab(node){
        // this.node.on('next', function(event){
        //     event.stopPropagation();
        //     let newItem = cc.instantiate(this.prefab1);
        //     this._cocosNode.addChild(newItem);
        // }.bind(this));
        // let newItem = cc.instantiate(this.prefab1);
        // this._cocosNode.addChild(newItem);
    // }


}
