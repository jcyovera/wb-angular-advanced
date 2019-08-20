import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EmitterService {
    // Event store
    private  _emitters: { [ID: string]: EventEmitter<any> } = {};
    // Set a new event in the store with a given ID
    // as key
    get(ID: string): EventEmitter<any> {
        if (!this._emitters[ID]) 
            this._emitters[ID] = new EventEmitter<any>();
        return this._emitters[ID];
    }
}
@Injectable()
export class EmitterServiceMock{
        emiterInstance: EventEmitter<any> = new EventEmitter<any>();
        get():EventEmitter<any>{
            return this.emiterInstance;
        }
}