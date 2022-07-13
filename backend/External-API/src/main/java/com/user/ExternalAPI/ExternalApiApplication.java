package com.user.ExternalAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ExternalApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExternalApiApplication.class, args);
	}

}
