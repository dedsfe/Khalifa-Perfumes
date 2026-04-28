import re

with open('data.js', 'r') as f:
    content = f.read()

new_products = """    {
        "id": "khamrah",
        "name": "Khamrah",
        "brand": "Lattafa",
        "category": "Doce",
        "coverImage": "./Assets/Khamram_nobg.png",
        "modalImage": "./Assets/Khamram_nobg.png",
        "glowColor": "rgba(184, 115, 51, 0.3)",
        "description": "Uma indulgência luxuosa que combina a doçura das tâmaras com especiarias quentes e madeiras nobres.",
        "notes": {
            "top": ["Canela", "Noz-moscada", "Bergamota"],
            "heart": ["Tâmara", "Pralinê", "Tuberosa", "Mahonial"],
            "base": ["Baunilha", "Fava Tonka", "Madeira de Âmbar", "Mirra"]
        }
    },
    {
        "id": "fakhar",
        "name": "Fakhar",
        "brand": "Lattafa",
        "category": "Floral",
        "coverImage": "./Assets/FakharLattafa_nobg.png",
        "modalImage": "./Assets/FakharLattafa_nobg.png",
        "glowColor": "rgba(255, 182, 193, 0.3)",
        "description": "Uma celebração da feminilidade luminosa. Flores brancas elegantes envolvidas em uma doçura sedutora.",
        "notes": {
            "top": ["Flor de Laranjeira", "Pêssego", "Maçã", "Pêra"],
            "heart": ["Jasmim", "Tuberosa", "Rosa"],
            "base": ["Sândalo", "Baunilha", "Patchouli"]
        }
    },
    {
        "id": "ameerati",
        "name": "Ameerati",
        "brand": "Al Wataniah",
        "category": "Amadeirado",
        "coverImage": "./Assets/Ameerati_nobg.png",
        "modalImage": "./Assets/Ameerati_nobg.png",
        "glowColor": "rgba(212, 175, 55, 0.3)",
        "description": "A essência da realeza árabe. Uma mistura hipnotizante de almíscar e notas cítricas cintilantes.",
        "notes": {
            "top": ["Cítricos", "Notas Verdes", "Almíscar"],
            "heart": ["Notas Amadeiradas", "Notas Herbais"],
            "base": ["Notas Especiadas", "Pó"]
        }
    },
    {
        "id": "choco_overdose",
        "name": "Choco Overdose",
        "brand": "Lattafa",
        "category": "Doce",
        "coverImage": "./Assets/ChocoOverdoseLattafa_nobg.png",
        "modalImage": "./Assets/ChocoOverdoseLattafa_nobg.png",
        "glowColor": "rgba(101, 67, 33, 0.3)",
        "description": "Uma sobremesa em forma de perfume. Chocolate rico e viciante com um toque de especiarias quentes.",
        "notes": {
            "top": ["Chocolate Amargo", "Cacau"],
            "heart": ["Caramelo", "Baunilha"],
            "base": ["Almíscar", "Âmbar", "Madeiras"]
        }
    },
    {
        "id": "dimmah",
        "name": "Dimmah",
        "brand": "Al Wataniah",
        "category": "Floral",
        "coverImage": "./Assets/Dimmah_nobg.png",
        "modalImage": "./Assets/Dimmah_nobg.png",
        "glowColor": "rgba(168, 50, 121, 0.3)",
        "description": "Feminilidade exótica e cativante. Flores exuberantes banhadas em uma aura misteriosa.",
        "notes": {
            "top": ["Limão", "Laranja", "Maçã"],
            "heart": ["Rosa", "Jasmim", "Madeira de Cedro"],
            "base": ["Almíscar", "Baunilha", "Pralinê"]
        }
    },
    {
        "id": "haya",
        "name": "Haya",
        "brand": "Lattafa",
        "category": "Doce",
        "coverImage": "./Assets/Haya_nobg.png",
        "modalImage": "./Assets/Haya_nobg.png",
        "glowColor": "rgba(255, 105, 180, 0.3)",
        "description": "Doçura e charme inegáveis. Uma composição efervescente de frutas tropicais e baunilha.",
        "notes": {
            "top": ["Morango", "Laranja Sanguínea", "Rosa"],
            "heart": ["Jasmim", "Orquídea", "Mel"],
            "base": ["Sândalo", "Baunilha", "Almíscar"]
        }
    },
    {
        "id": "milena",
        "name": "Milena",
        "brand": "Árabe Clássico",
        "category": "Floral",
        "coverImage": "./Assets/Milena_nobg.png",
        "modalImage": "./Assets/Milena_nobg.png",
        "glowColor": "rgba(221, 160, 221, 0.3)",
        "description": "Um buquê floral oriental sofisticado e atemporal para momentos inesquecíveis.",
        "notes": {
            "top": ["Bergamota", "Pêra"],
            "heart": ["Tuberosa", "Flor de Laranjeira"],
            "base": ["Patchouli", "Vetiver", "Baunilha"]
        }
    },
    {
        "id": "musamam",
        "name": "Musamam",
        "brand": "Lattafa",
        "category": "Amadeirado",
        "coverImage": "./Assets/Musamam_nobg.png",
        "modalImage": "./Assets/Musamam_nobg.png",
        "glowColor": "rgba(139, 69, 19, 0.3)",
        "description": "Força e nobreza em essência pura. Madeiras preciosas combinadas com couro sensual.",
        "notes": {
            "top": ["Mandarina Italiana", "Lavanda", "Açafrão"],
            "heart": ["Gerânio do Egito", "Madeira de Cedro", "Âmbar"],
            "base": ["Incenso da Somália", "Akigalawood", "Cisto Concreto"]
        }
    },
    {
        "id": "royal_amber",
        "name": "Royal Amber",
        "brand": "Orientica",
        "category": "Amadeirado",
        "coverImage": "./Assets/RoyalAmber_nobg.png",
        "modalImage": "./Assets/RoyalAmber_nobg.png",
        "glowColor": "rgba(255, 191, 0, 0.3)",
        "description": "Uma obra-prima reluzente. Âmbar aquecido envolto em notas frutadas e cremosas exuberantes.",
        "notes": {
            "top": ["Bergamota", "Verde"],
            "heart": ["Melão", "Abacaxi", "Gourmand"],
            "base": ["Madeiras", "Baunilha", "Almíscar"]
        }
    },
    {
        "id": "sabah_al_ward",
        "name": "Sabah Al Ward",
        "brand": "Al Wataniah",
        "category": "Floral",
        "coverImage": "./Assets/SabahAlWard_nobg.png",
        "modalImage": "./Assets/SabahAlWard_nobg.png",
        "glowColor": "rgba(255, 20, 147, 0.3)",
        "description": "O frescor de um jardim oriental ao amanhecer. Pétalas de rosa orvalhadas em profusão.",
        "notes": {
            "top": ["Pimenta Rosa", "Mandarina"],
            "heart": ["Cacau", "Flor de Laranjeira", "Jasmim Sambac"],
            "base": ["Baunilha", "Fava Tonka", "Patchouli"]
        }
    },"""

# Use regex to replace prod_4 through prod_13
# We find the start of prod_4 and the end of prod_13
start_str = '    {\n        "id": "prod_4",'
end_str = '    {\n        "id": "prod_14",'

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_products + '\n' + content[end_idx:]
    with open('data.js', 'w') as f:
        f.write(new_content)
    print("Replaced prod_4 to prod_13 successfully.")
else:
    print("Could not find boundaries.")
