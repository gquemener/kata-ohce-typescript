package com.qalens.ohce;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.*;
import java.nio.charset.StandardCharsets;


public class OhceTest {
    ByteArrayOutputStream baos=new ByteArrayOutputStream();
    PrintStream oos;
    InputStream ois;
    @BeforeEach
    public void setUpIO(){
        oos = System.out;
        ois = System.in;
        System.setOut(new PrintStream(baos));
    }
    @Test
    public void shouldGreetAndStop(){
        System.setIn(new ByteArrayInputStream("Stop!".getBytes(StandardCharsets.UTF_8)));
        String[] args = {"Atmaram"};
        Ohce.main(args);
        Assertions.assertEquals("¡Buenos días Pedro!\nAdios Atmaram\n",new String(baos.toByteArray()));
    }
    @AfterEach
    public void resetIO(){
        System.setOut(oos);
        System.setIn(ois);
    }
}
