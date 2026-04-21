import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  landingForm!: FormGroup;
  year = new Date().getFullYear();

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.landingForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }


  login(){
    this.router.navigate(['/login']);
  }

  getStarted(){
    const email = this.landingForm.get('email')?.value?.toString().trim() || '';
    console.log('getStarted called, email=', email);
    if (!email) {
      console.warn('getStarted aborted: empty email');
      return;
    }
    this.router.navigate(['/signup'], { queryParams: { email } })
      .then(ok => console.log('router.navigate result:', ok))
      .catch(err => console.error('router.navigate error:', err));
  }
  reasons = [
    {
      title: 'Enjoy on your TV.',
      text: 'Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV and more.',
      icon: 'tv'
    },
    {
      title: 'Watch anywhere',
      text: 'Stream on your phone, tablet or laptop — downloads available for offline viewing.',
      icon: 'devices'
    },
    {
      title: 'Personalized recommendations',
      text: 'Get suggestions based on what you watch to discover more you’ll love.',
      icon: 'recommend'
    },
    {
      title: 'Multiple profiles',
      text: 'Create profiles for family members with separate recommendations and settings.',
      icon: 'people'
    },
    {
      title: 'Ultra HD & HDR',
      text: 'Select titles available in 4K UHD and HDR for brilliant detail.',
      icon: '4k'
    },
    {
      title: 'Download & Go',
      text: 'Save shows to watch offline while commuting or traveling.',
      icon: 'download'
    },
    {
      title: 'Create watchlists',
      text: 'Save favorites to your list and pick up where you left off.',
      icon: 'playlist'
    },
    {
      title: 'Cancel anytime',
      text: 'No long-term commitment — pause or cancel your membership whenever you want.',
      icon: 'cancel'
    },
  ];

  faqs = [
    {
      question: 'What is Pudplanet?',
      answer: 'Pudplanet is a streaming service offering movies, TV shows, anime, documentaries and more across internet-connected devices. Enjoy unlimited ad‑free streaming for one monthly price.'
    },
    {
      question: 'How much does it cost?',
      answer: 'We offer several plans to fit different needs. Prices vary by region and plan (SD, HD, UHD). See the pricing page for current rates and available features.'
    },
    {
      question: 'Which devices are supported?',
      answer: 'Pudplanet works on Smart TVs, streaming players (Roku, Apple TV, Chromecast), game consoles, phones, tablets and web browsers.'
    },
    {
      question: 'Can I download shows to watch offline?',
      answer: 'Yes. Many titles are available for download on mobile apps so you can watch without an internet connection.'
    },
    {
      question: 'How do I cancel?',
      answer: 'You can cancel anytime from your account settings. Your subscription will remain active until the end of the current billing period.'
    },
    {
      question: 'Are there parental controls?',
      answer: 'Yes. You can create profiles and enable parental controls to restrict content by maturity rating.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept major credit/debit cards and selected local payment methods depending on your country.'
    },
  ];
}

