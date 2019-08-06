package in.apssdc.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andromeda.commons.model.Response;

import in.apssdc.dao.StudentDAO;



@Service
public class StudentService {
	
	@Autowired
	private StudentDAO studentDAO;
	
	
	Response response = new Response();
	

	public Response getStudentDetails(String pin)
	{
		response.setSuccessful(false);
		Map<String, Object> data = studentDAO.getStudentDetails(pin);
		response.setResponseObject(data);
		response.setSuccessful(true);
		return response;
	}
	

}
