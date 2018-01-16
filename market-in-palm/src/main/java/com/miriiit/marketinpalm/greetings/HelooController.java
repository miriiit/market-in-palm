package com.miriiit.marketinpalm.greetings;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class HelooController {
	@RequestMapping(method=RequestMethod.GET,value="/greeting")
	public @ResponseBody Person greeting(/*@RequestParam(value="name", defaultValue="World") String name*/){
	       /* JSONObject obj=new JSONObject();
	        try {
				obj.put("key", "Hyeeee dear");
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}*/
		
           Person p= new Person("9001","M.Azhar Hussnain","33K");
           return p;
 	    }
}
class Person{
	private String id;
	private  String name;
	private  String salary;
	public Person(String id,String name,String salary){
		this.id=id;
		this.name=name;
		this.salary=salary;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	
	
	
}