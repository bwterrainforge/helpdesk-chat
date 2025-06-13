import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  askQuestionStream(prompt: string): Observable<string> {
    return new Observable(observer => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/api/chat', true);
      xhr.setRequestHeader('Content-Type', 'application/json');

      let buffer = '';
      xhr.onprogress = () => {
        const chunk = xhr.responseText.slice(buffer.length);
        buffer += chunk;
        observer.next(chunk);
      };

      xhr.onload = () => observer.complete();
      xhr.onerror = () => observer.error('Stream failed');

      xhr.send(JSON.stringify({ prompt }));
    });
  }
}
