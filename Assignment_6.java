package assignments;
import java.io.*;
import java.util.*;

public class Assignment1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Student ID");
		int Student_ID=sc.nextInt();
		System.out.println("Enter Student Name");
		String Stu_name=sc.next();
		System.out.println("Enter Marks in range of 0 to 100");
		int Marks=sc.nextInt();
		System.out.println("Fee Paid Status(True/False) :");
		Boolean status=sc.nextBoolean();
//		Pass/Fail
		String res;
		if(Marks>=40)
		{
			res="Student Passed";
			
		}
		else {
			res="Student Failed";
		}
//		Grade Assignment
		char grade;
		if(Marks<50)
		{
			grade='D';
		}
		else if(Marks>=50 && Marks<=69) {
			grade='C';
		}
		else if(Marks>=70 && Marks<=84) {
			grade='B';
		}
		else {
			grade='A';
		}
//	Certificate Eligibility
		String Cert_Status;
		if(Marks>=40&&status)
		{
			Cert_Status="Eligible for Certificate";
		}
		else {
			Cert_Status="Not Eligible for Certificate";
		}
//		Course Allocation
		String course;
		switch(grade){
		case 'A':
			course="Data Science";
			break;
		case 'B':
			course="Java Full Stack";
			break;
		case 'C':
			course="Web Development";
			break;
		case 'D':
			course="Basic Programming";
			break;
		default:
			course="Counsellinhg";
		}
//		Final Output
		System.out.println("Student ID & Name :"+Student_ID+" "+Stu_name);
		System.out.println("Enter Marks and Result:"+Marks+" "+res);
		System.out.println("Grade:"+grade);
		System.out.println("Fee Paid status:"+status);
		System.out.println("Certificate Eligibility:"+Cert_Status);
		System.out.println("Allocated Course"+course);
		
		sc.close();
	}
}
