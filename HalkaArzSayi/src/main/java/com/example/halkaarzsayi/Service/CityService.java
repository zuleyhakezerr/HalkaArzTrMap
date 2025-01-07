package com.example.halkaarzsayi.Service;

import com.example.halkaarzsayi.Entity.City;
import com.example.halkaarzsayi.Repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    public List<City>getAllCities(){

        return cityRepository.findAll();
    }
    public City getCityById(Long id){

        Optional<City> optionalCity = cityRepository.findById(id);
        return optionalCity.orElse(null);

    }
}
