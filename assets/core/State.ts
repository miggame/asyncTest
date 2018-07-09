import ObserverMgr from './ObserverMgr';
import { StateType } from './StateType';

export class State {
    private _time:number = 0;
    private _id: number;

    public static getInstance(){
        let clazz: any = this;
        console.log(clazz._instance);
        if(clazz._instance === undefined){
            clazz._instance = new clazz();
            
        }
        return clazz._instance;
    }


    public update(dt){
        console.log('update');
        // this._id = window.setInterval(this.refresh, dt);
        this._id = window.setInterval(this.refresh.bind(this), dt);
    }

    public refresh(){
        this._time++;
        console.log(this._time);
        if(this._time === 5){
            ObserverMgr.dispatchMsg(StateType.DigGold, null);
        } else if(this._time === 10){
            ObserverMgr.dispatchMsg(StateType.GoHome, null);
        } else if(this._time === 15){
            ObserverMgr.dispatchMsg(StateType.GoShop, null);
        } else if(this._time === 20){
            clearInterval(this._id);
        }
    }
}