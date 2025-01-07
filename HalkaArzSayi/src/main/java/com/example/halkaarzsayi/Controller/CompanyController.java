package com.example.halkaarzsayi.Controller;

import com.example.halkaarzsayi.Entity.Company;
import com.example.halkaarzsayi.Service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/companies")
public class CompanyController {
@Autowired
    private CompanyService companyService;
@GetMapping
    public ResponseEntity<List<Company>>  getAllCompanies(){

    List<Company> companies=companyService.getAllCompanies();
    return new ResponseEntity<>(companies, HttpStatus.OK);
}

@GetMapping("/{id}")
public ResponseEntity<Company> getCompanyById(@PathVariable Long id) {
    Company company = companyService.getCompanyById(id);
    if (company != null) {
        return new ResponseEntity<>(company, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

@GetMapping("/byCity/{cityId}")
public ResponseEntity<List<Company>> getCompaniesByCity(@PathVariable Long cityId) {
    List<Company> companies = companyService.getComaniesByCity(cityId);
    return new ResponseEntity<>(companies, HttpStatus.OK);
}
}
