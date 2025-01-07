package com.example.halkaarzsayi.Service;

import com.example.halkaarzsayi.Entity.Company;
import com.example.halkaarzsayi.Repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    public List<Company>getAllCompanies(){

     return companyRepository.findAll();

    }
    public Company getCompanyById(Long id){

        Optional<Company> optionalCompany = companyRepository.findById(id);

        return  optionalCompany.orElse(null);
    }


    public List<Company>getComaniesByCity(Long cityId){

        return companyRepository.findByCityId(cityId);
    }
}
