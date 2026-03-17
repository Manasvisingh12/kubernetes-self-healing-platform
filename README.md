<p align="center"> <h1>☸️ Kubernetes Self-Healing Platform</h1> </p> <p align="center"> <img src="https://img.shields.io/badge/Kubernetes-Self_Healing-blue?style=for-the-badge&logo=kubernetes" /> <img src="https://img.shields.io/badge/Docker-Containerization-blue?style=for-the-badge&logo=docker" /> <img src="https://img.shields.io/badge/Minikube-Local_Cluster-green?style=for-the-badge&logo=minikube" /> <img src="https://img.shields.io/badge/NGINX-Ingress-orange?style=for-the-badge&logo=nginx" /> <img src="https://img.shields.io/badge/HPA-Scaling-yellow?style=for-the-badge" /> </p>
<h1> Architecture</h1>
<p align="center"> <img src="https://github.com/user-attachments/assets/86fd8d12-4735-48c0-b87d-75e54c43ca92" width="80%"> </p>

<h1> Request Flow </h1>

      Step-by-step flow of a user request through the Kubernetes cluster:

User Request – External user sends a request to the application.

Ingress (NGINX) – Routes the external request to the cluster.

Service (ClusterIP) – Distributes the traffic evenly across pods.

Deployment – Ensures the desired number of replicas are running.

Pods (Replicated) – Each pod handles the request; automatically recreated if a failure occurs.

<h2> Tech Stack</h2>

Layer	Technology & Badge
Containerization	Docker

Orchestration	Kubernetes

Networking	NGINX Ingress

Scaling	Horizontal Pod Autoscaler (HPA)

<h1> Key Features</h1>

Self-Healing: Automatic pod recovery

Auto Scaling: CPU-based dynamic scaling

Load Balancing: Even traffic distribution

External Access: Ingress routing

Fault Simulation: Manual pod deletion to test recovery

<p align="center"> <img src="https://img.shields.io/badge/Deployment-Successful-brightgreen?style=for-the-badge" /> <img src="https://img.shields.io/badge/HPA-Active-yellow?style=for-the-badge" /> <img src="https://img.shields.io/badge/CI-CD-Integrated-blue?style=for-the-badge" /> </p>
<h1>Project Structure</h1> 
kubernetes-self-healing/
│
├── k8s/             # Kubernetes YAML configurations
├── screenshots/     # Proof of working system
├── docs/
│   └── architecture.png
└── README.md
<h1>Setup Instructions</h1> 
1️⃣ Start Minikube
minikube start

2️⃣ Enable Ingress
minikube addons enable ingress

3️⃣ Deploy Kubernetes Resources
kubectl apply -f k8s/

4️⃣ Access Application
minikube ip

Add to /etc/hosts:

<MINIKUBE-IP> myapp.local

Visit: http://myapp.local

<h1>Demonstration</h1>

Self-Healing Pods

kubectl delete pod <pod-name>
kubectl get pods

Auto Scaling

kubectl run -i --tty load-generator --image=busybox /bin/sh

Inside container:

while true; do wget -q -O- http://myapp.local; done

Monitor scaling:

kubectl get hpa -w
<h1>Screenshots</h1> 

Running Pods

<p align="center"> <img src="screenshots/pod.png" width="70%"> </p>

HPA Scaling

<p align="center"> <img src="screenshots/hpa.png" width="70%"> </p>

Self-Healing Demo

<p align="center"> <img src="screenshots/1.png" width="45%"> <img src="screenshots/2.png" width="45%"> </p>
<h1>Core Concepts</h1>

Declarative Infrastructure

Desired State Management

Pod Lifecycle Handling

Horizontal Scaling

Fault Tolerance

<h1>Why This Project Matters</h1>

Demonstrates deep understanding of Kubernetes architecture

Builds resilient, fault-tolerant systems

Hands-on debugging & failure simulation

Shows production-ready DevOps skills

<h1>Future Enhancements</h1>

Monitoring with Prometheus & Grafana

CI/CD pipeline integration

Cloud deployment (AWS / GCP)

Centralized logging with ELK Stack

<p align="center"> *Professional, portfolio-ready Kubernetes project demonstrating self-healing, auto-scaling, and DevOps best practices.* </p>

Cloud deployment (AWS / GCP)

Centralized logging with ELK Stack

<p align="center"> *Professional, portfolio-ready Kubernetes project demonstrating self-healing, auto-scaling, and DevOps best practices.* </p>
