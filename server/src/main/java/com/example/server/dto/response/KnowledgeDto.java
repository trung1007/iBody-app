package com.example.server.dto.response;
import lombok.*;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class KnowledgeDto {
    private String topicName;
    private String description;
    private String content;
}
