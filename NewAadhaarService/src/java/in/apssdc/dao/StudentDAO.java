package in.apssdc.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.andromeda.commons.dao.BaseDAO;

@Repository
public class StudentDAO extends BaseDAO
{
	public Map<String, Object> getStudentDetails(String pin)
	{  
		List<Map<String, Object>> studentDetails =
				sqlSessionTemplate.selectList("Student.getStudentDetails", pin);

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("studentDetails", studentDetails);  
		return map;          
	}  

}
