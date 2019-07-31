package in.apssdc.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.andromeda.commons.model.Response;

@RestController
@RequestMapping("/aadhaar")
public class AadhaarController {
	
	
	@ResponseBody
	@RequestMapping(value ="/getAadhaarDetails",
			method = { RequestMethod.POST, RequestMethod.GET })
	public Response getAadhaarDetails(@RequestBody String aadhaar)      
	{   
		System.out.println("aadhaarrr:"+aadhaar);   
		return null;
	}
	

}
