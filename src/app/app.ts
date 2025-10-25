import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { Testimonies } from "./components/testimonies/testimonies";
import { Hero2 } from "./components/hero2/hero2";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Features, Testimonies, Hero2, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('koalli');
}
