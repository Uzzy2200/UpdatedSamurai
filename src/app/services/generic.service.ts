import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GenericService<Entity> {
urlNew: string = environment.apiUrl;


constructor (private http: HttpClient){}
getById(entity: string, id: number): Observable<Entity> {
  const url = `${this.urlNew}${entity}/${id}`;
  return this.http.get<Entity>(url);
  }

getAll(endpoint: string): Observable<Entity[]> {
  const url = `${this.urlNew}${endpoint}`;
  return this.http.get<Entity[]>(url);
}

create (s:Entity, endpoint:string):Observable<Entity>{
  return this.http.post<Entity>(`${this.urlNew}${endpoint}`,s,httpOptions);
}
delete<Entity>(endpoint: string, entityId: number): Observable<any> {
  const url = `${this.urlNew}${endpoint}/${entityId}`;
  return this.http.delete(url, httpOptions);
}
hashPassword(password: string): string {
  // Implement your password hashing logic here
  return password; // For demonstration purposes, return the password as is
}
loginUser(email: string, password: string): Observable<any> {
  const loginUrl = `${this.urlNew}/login`;
  // Hash the password before sending it to the server
  const hashedPassword = this.hashPassword(password);

  // Here you can send the email and hashed password to your server for authentication
  // For demonstration purposes, let's just log them
  console.log('Email:', email);
  console.log('Hashed Password:', hashedPassword);

  // Replace this with your actual login request to the server
  return this.http.post(loginUrl, { email, password }, httpOptions);
}


}



