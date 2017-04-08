package com.java.mongo;

import java.util.ArrayList;

import com.mongodb.BasicDBList;
import com.mongodb.BasicDBObject;

public class EarnedValue {
	
	private int ev;
	
	public EarnedValue(){
	}
	
	public EarnedValue(int ev){
		this.ev = ev;
	}
	
	public EarnedValue(BasicDBObject dBOjectEarned){
		this.ev = dBOjectEarned.getInt("ev");
	}
	
	public BasicDBObject toDBObjectProject() {
		// Creamos una instancia BasicDBObject
		BasicDBObject dBOjectEarned = new BasicDBObject();
		dBOjectEarned.append("ev", this.getEv());
		return dBOjectEarned;
	}
	
	public int getEv(){
		return ev;
	}
	
}
