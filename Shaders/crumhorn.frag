#ifdef GL_ES
precision mediump float;
#endif

varying vec3 lightVec;
varying vec2 texCoord;

void main(void)
{
    vec3 darkBrown = vec3(0.4, 0.25, 0.1);
    vec3 blackColor = vec3(0.0, 0.0, 0.0);

    vec3 baseColor;

    if (texCoord.x < 0.2) {
        baseColor = darkBrown;
    } else if (texCoord.x >= 0.2 && texCoord.x < 0.23) {
        baseColor = blackColor;
    } else if (texCoord.x >= 0.23) {
        baseColor = darkBrown;
    } else {
        baseColor = darkBrown;
    }

    vec3 N = normalize(lightVec);
    float diff = max(dot(N, vec3(0.0, 0.0, 1.0)), 0.0);
    
    // Adicionar luz ambiente forte e reduzir a contribuição da luz difusa
    float ambient = 0.7;
    float diffuseContribution = 0.3;
    
    // Combinação de luz ambiente e difusa
    vec3 finalColor = baseColor * (ambient + diff * diffuseContribution);

    gl_FragColor = vec4(finalColor, 1.0);
}
