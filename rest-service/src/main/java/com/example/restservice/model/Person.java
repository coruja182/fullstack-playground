package com.example.restservice.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "people")
@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;
}
