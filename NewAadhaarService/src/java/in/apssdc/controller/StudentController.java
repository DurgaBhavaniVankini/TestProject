package in.apssdc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.andromeda.commons.model.Response;

import in.apssdc.service.StudentService;


@RestController
@RequestMapping("/student")
public class StudentController {
	
	
	@Autowired
	private StudentService studentService; 
	
	@ResponseBody
	@RequestMapping(value ="/getStudentDetails",
			method = { RequestMethod.POST, RequestMethod.GET })
	public Response getStudentDetails(@RequestBody String pin)      
	{   
		return studentService.getStudentDetails(pin);
	}
	  
	
	
}
