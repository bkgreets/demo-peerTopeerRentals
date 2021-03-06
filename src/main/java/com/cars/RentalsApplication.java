package com.cars;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;

import com.cars.interceptors.AuthenticationLookUp;

@SpringBootApplication
public class RentalsApplication {

    public static void main(String[] args) {
        SpringApplication.run(RentalsApplication.class, args);
    }
    
    public void addInterceptors(final InterceptorRegistry registry){
		//registry.addInterceptor(new AuthenticationLookUp()).addPathPatterns("/api/**");
	}
}
