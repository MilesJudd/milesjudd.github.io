# Scientific Machine Learning & AI for Engineering

I am a DPhil candidate in Engineering Science at the University of Oxford working at the intersection of scientific machine learning, engineering simulation, computer vision, and AI for engineering.

My work focuses on building machine learning systems that interact with physical models, simulation workflows, and experimental data. I develop simulation-driven ML pipelines, inverse-problem solvers, physics-informed models, and engineering AI tools that help extract insight from complex engineering systems.

My experience spans a broad range of numerical modelling domains:

* **Materials Engineering** – material characterisation, constitutive behaviour, Virtual Fields Method (VFM), Digital Image Correlation (DIC)
* **Structural & Civil Engineering** – masonry structures, finite element analysis, structural assessment, parameter identification
* **Dynamics & Vibrations** – operational modal analysis, vibration measurement, dynamic system identification
* **Electrical & Semiconductor Systems** – simulation-driven machine learning, PINNs, inverse modelling, magnetic-field-based reconstruction

I have extensive experience with finite element modelling and engineering simulation workflows using **ANSYS**, **DIANA FEA**, experimental mechanics methods, and simulation-driven machine learning approaches.

My research interests include:

* Scientific Machine Learning
* AI Physics Models
* Engineering Simulation
* Finite Element Analysis
* Inverse Problems
* Surrogate Modelling
* Engineering Agents & RAG Systems
* Robust Machine Learning
* AI-Assisted Engineering Workflows

[View Portfolio]({{ site.baseurl }}/portfolio)

[View Publications]({{ site.baseurl }}/publications)

**Technical Skills:** Python, PyTorch, ANSYS, DIANA FEA, MATLAB, Digital Image Correlation (DIC), Virtual Fields Method (VFM), Scientific Computing

## 🚀 Featured Project: SimContext

### AI-Ready Engineering Context from Simulation Models

SimContext is an engineering AI tool that converts FEM models into structured engineering knowledge and LLM-ready context.

The system automatically:

* Parses ANSYS APDL and Abaqus input files
* Extracts engineering metadata and model structure
* Detects modelling risks and validation concerns
* Generates engineering review reports
* Produces compact context blocks for LLMs, agents, and engineering RAG systems

### Why it exists

Engineering simulation models often contain valuable domain knowledge, but understanding an existing model may require manually reading thousands of lines of solver input.

SimContext transforms simulation assets into structured engineering context, helping engineers and AI systems understand legacy models faster.

### Example Applications

* Engineering copilots
* Simulation RAG systems
* Legacy model onboarding
* Surrogate modelling workflows
* Digital twin pipelines
* AI-assisted engineering systems

🔗 **Try the Hugging Face Space:** https://huggingface.co/spaces/Milesju/SimContext

### Projects
- **MINT: Masonry in-situ testing and material identification:** Funded by the Engineering and Physical Sciences Research Council (EPSRC), the [MINT project](https://testgow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V048082/1) aims to estimate mechanical properties of existing masonry assets using Digital Image Correlation techniques (DIC) and the Virtual Fields Method (VFM).
- **High-speed camera based operational modal analysis:** This work compares camera-based Operational Modal Analysis (OMA) with conventional EMA using piezoelectric sensors. A Python toolbox, pyOMA, is developed, implementing the Frequency Domain Decomposition (FDD) method. Validated on a reference structure, the methods are tested on a custom setup, focusing on the impact of sensor weight on modal properties.
- **AI at BMW MINI Plant Oxford in collaboration with the Oxford SDG Impact Lab** Together with fellows from the [Oxford SDG Impact Lab](https://www.sdglab.uk/), we collaborated with the BMW MINI Plant Oxford to create a roadmap for deploying AI tools in manufacturing. This initiative aimed to enhance efficiency and sustainability, aligning with the lab's mission to drive impactful, sustainable development. Learn more about the project [here](https://www.sdglab.uk/case-study/student-story-miles-judd).


### Publications

- **Judd, M. R. W., Wilson, R., Sangirardi, M., Pulatsu, B., & Acikgoz, S. (2025).** Experimental characterisation of hydraulic lime mortar and clay brick elasticity using the Virtual Fields Method. *Construction and Building Materials, vol 493*. [https://doi.org/10.1016/j.conbuildmat.2025.143076](https://doi.org/10.1016/j.conbuildmat.2025.143076)
- **Judd, M. R. W., Sangirardi, M., & Acikgoz, S. (2025).** The influence of Digital Image Correlation parameters on the accuracy of elastic property identification of brick and mortar from compression stack tests. *18th International Brick and Block Masonry Conference (IB2MaC 2024)*. *Lecture Notes in Civil Engineering, vol 614*. Springer, Cham. [https://doi.org/10.1007/978-3-031-73310-9_80](https://doi.org/10.1007/978-3-031-73310-9_80)
- **Sangirardi, M., Judd, M. R. W., & Acikgoz, S. (2025).** Identification of Softening Constitutive Properties of Brittle Materials Using the Virtual Fields Method. *18th International Brick and Block Masonry Conference (IB2MaC 2024)*. *Lecture Notes in Civil Engineering, vol 613, pp. 341–350*. Springer, Cham. [https://doi.org/10.1007/978-3-031-73314-7_25](https://doi.org/10.1007/978-3-031-73314-7_25)
- **Judd, M. R. W., Sangirardi, M., & Acikgoz, S. (2024).** A Practical Method for Robust Elastic Characterisation of Mortar in Flat Jack Tests. *Available at SSRN*. [http://dx.doi.org/10.2139/ssrn.4990690](http://dx.doi.org/10.2139/ssrn.4990690)
- **Judd, M. R. W., Sangirardi, M., & Acikgoz, S. (2024).** Virtual fields characterisation of elasticity in mortars. *Proceedings of the SUBLime Conference 2024 – Towards the Next Generation of Sustainable Masonry Systems: Mortars, Renders, Plasters and Other Challenges, pp. 99–100*.
- **Judd, M., Squires, D., Akcicek, K., Sangirardi, M., & Acikgoz, S. (2024).** Does Lack of CO2 Control in Environmental Chambers Influence the Strength and Stiffness of Hydraulic Lime Mortars? *Proceedings of the SUBLime Conference 2024 – Towards the Next Generation of Sustainable Masonry Systems: Mortars, Renders, Plasters and Other Challenges*. *MATEC Web Conf., vol 403, Article Number 02002*. [https://doi.org/10.1051/matecconf/202440302002](https://doi.org/10.1051/matecconf/202440302002)
- **Judd, M. R. W., Sangirardi, M., & Acikgoz, S. (2023).** A Modified Virtual Fields Approach to Identify the Mechanical Properties of Mortar in Existing Masonry Structures Without Loading Information. *Structural Analysis of Historical Constructions (SAHC 2023)*. *RILEM Bookseries, vol 47*. Springer, Cham. [https://doi.org/10.1007/978-3-031-39603-8_34](https://doi.org/10.1007/978-3-031-39603-8_34)
- **Sangirardi, M., Judd, M. R. W., & Acikgoz, S. (2023).** Determining the Young’s Modulus of Lime Mortar Using the Virtual Fields Method. *Structural Analysis of Historical Constructions (SAHC 2023)*. *RILEM Bookseries, vol 47*. Springer, Cham. [https://doi.org/10.1007/978-3-031-39603-8_35](https://doi.org/10.1007/978-3-031-39603-8_35)
- **Gille, M., Judd, M. R. W., & Rixen, D. J. (2022).** Stereoscopic High-Speed Camera-Based Operational Modal Analysis Using a One-Camera Setup. *Rotating Machinery, Optical Methods & Scanning LDV Methods, Volume 6. Conference Proceedings of the Society for Experimental Mechanics Series*. Springer, Cham. [https://doi.org/10.1007/978-3-031-04098-6_11](https://doi.org/10.1007/978-3-031-04098-6_11)
